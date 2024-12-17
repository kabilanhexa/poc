import React, {useState, useEffect, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react';
import PropTypes from 'prop-types';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import GridControls from '../../../components/common/gridControls/GridControls';
import './Grid.scss';

const Grid = ({
    gridRef,
    isEnclosed = false,
    isSort = true,
    viewName,
    gridCols,   
    rowSelection = false,
    pageSize = 20,
    gridRows = [],
    multiPages = false,
    hideSearch = true,
    rowHeight = 75,
    headerHeight = 65,
    additionalDetail = '',
    editType = '',
    iseditable = false,
    columnTypes = null,
    cellValueChanged=null,
    excelStyles=null,
    isExportCSVhide=false,
    isBreadCrumb= true,
    pagination = true,
    footerData = null,
    cellSelection = false,
    ...rest
}) => {
    const [gridApi, setGridApi] = useState(null);
    const [rowCount, setRowCount] = useState(0);
    const [filteredRowCount, setFilteredRowCount] = useState(0);

    let params = {
       fileName: viewName || '',
       columnKeys: gridCols?.map((i) => i?.field),
    };

    useEffect(() => {
       let list = gridRows || [];
       let count = list?.length;
    //    if(multiPages) setRowCount(rest?.rowsInfo?.totalElements);
    //    else setRowCount(count)
       setRowCount(count)
       setFilteredRowCount(count);
       if(gridApi?.api) onFilterChanged(gridApi?.api);
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gridRows, gridApi]);

    useEffect(() => {
        if(gridApi){
            if(rest?.getRenderedNodes && typeof rest?.getRenderedNodes === 'function'){
                rest?.getRenderedNodes(gridApi.getRenderedNodes())
            }
            if(rest?.getAllRows && typeof rest?.getAllRows === 'function'){
                let rows = []
                gridApi?.forEachNodeAfterFilter(i => rows.push(i))
                rest?.getAllRows(rows)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filteredRowCount])

    const onGridReady = useCallback((params) => {
       setGridApi(params?.api);
       onFilterChanged(params?.api);
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gridRows]);

    const onFilterChanged = (grid) => {
       setFilteredRowCount(grid.getDisplayedRowCount());
    };

    const clearFilters = useCallback(() => {
        gridRef?.current?.api?.setFilterModel(null);
        gridRef?.current?.api?.setSortModel(null);
        gridRef?.current?.api?.deselectAll();
        if(rest?.resetSelection !== undefined && (typeof rest?.resetSelection === 'function')){
            rest?.resetSelection()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])


    //   if(gridRows?.length === 0 && rest?.noRowsMessage){
    //     return(
    //         <div className='noRowsMessage'>
    //             {rest?.noRowsMessage}
    //         </div>
    //     )
    //   }

    return (
        <>
            <div className={`box-grid ${isEnclosed && 'box-enclose'}`}>
                <div
                    id="myGrid"
                    className="ag-theme-alpine">
                    <AgGridReact
                        ref={gridRef}
                        defaultColDef={{ flex: 1, sortable: isSort, resizable: true, width: 100}}
                        onGridReady={onGridReady}
                        suppressContextMenu={true}
                        popupParent={document.querySelector('body')}
                        rowStyle={{ borderBottom: '10px solid #fff' }}
                        rowHeight={rowHeight}
                        headerHeight={headerHeight}
                        domLayout="autoHeight"
                        rowData={gridRows}
                        pagination={pagination}
                        paginationPageSize={pageSize}
                        cellSelection={cellSelection}
                        rowSelection={rowSelection}
                        columnTypes={columnTypes}
                        overlayLoadingTemplate={'Loading'}                        
                        overlayNoRowsTemplate={rest?.noRowsMessage}
                        enableCellTextSelection={true}
                        getContextMenuItems={rest?.getContextMenuItems}
                        onCellValueChanged={cellValueChanged}
                        onFilterChanged={() => onFilterChanged(gridApi)}
                        excelStyles={excelStyles}
                        cacheBlockSize={rest.cacheBlockSize}
                        rowModelType={rest.rowModelType}
                        serverSideStoreType={rest.serverSideStoreType}
                        onSelectionChanged={(e) => {
                            if(rest?.onSelectionChanged !== undefined && typeof rest?.onSelectionChanged === 'function'){
                                rest?.onSelectionChanged(e.api.getSelectedRows())
                            }
                        }}
                        onPaginationChanged={() => {
                            if(typeof rest?.pageChange === 'function' && gridRef?.current){
                                rest?.pageChange(gridRef?.current?.api)
                            }
                        }}
                        pinnedBottomRowData={footerData}
                        tooltipShowDelay={500}
                    >
                        {gridCols?.map((i, key) => {
                            let properties = {}
                            
                            if(i?.renderFunction !== undefined && typeof i?.renderFunction === 'function'){
                                properties = {
                                    cellRenderer: i.renderFunction
                                }
                            } else if(i?.cellRendererFramework !== undefined && typeof i?.cellRendererFramework === 'function'){
                                properties = {
                                    cellRendererFramework: i.cellRendererFramework
                                }
                            }
                            else {
                                properties = {
                                    cellRenderer: params.value
                                }
                            }                   

                            if(i?.valueGetter){
                                properties = {
                                    ...properties,
                                    valueGetter : i.valueGetter
                                }
                            }

                            if(i?.valueFormatter){
                                properties = {
                                    ...properties,
                                    valueFormatter : i.valueFormatter
                                }
                            }

                            if(i?.minWidth){
                                properties = {
                                    ...properties,
                                    minWidth : i.minWidth
                                }
                            }

                            if(i?.maxWidth){
                                properties = {
                                    ...properties,
                                    maxWidth : i.maxWidth
                                }
                            }

                            if(i?.headerComponentParams){
                                properties = {
                                    ...properties,
                                    headerComponentParams : i.headerComponentParams
                                }
                            }

                            if(i?.checkboxSelection){
                                properties = {
                                    ...properties,
                                    checkboxSelection : i.checkboxSelection
                                }
                            }

                            if(i?.headerCheckboxSelection){
                                properties = {
                                    ...properties,
                                    headerCheckboxSelection : i.headerCheckboxSelection,
                                    headerCheckboxSelectionFilteredOnly: true,
                                    headerCheckboxSelectionCurrentPageOnly: true,
                                }
                            }

                            if(i?.suppressMovable){
                                properties = {
                                    ...properties,
                                    suppressMovable : i.suppressMovable
                                }
                            }

                            if(i?.lockPosition){
                                properties = {
                                    ...properties,
                                    lockPosition : i.lockPosition
                                }
                            }

                            return (
                                <AgGridColumn
                                    key={`${key}-${i.field}`}
                                    field={i?.field || ''}
                                    headerName={i?.headerName || ''}
                                    suppressMenu={i?.suppressMenu}
                                    hide={i?.hide || ''}
                                    filter={i?.agFilter ? false : 'agMultiColumnFilter'}
                                    filterParams={i?.filterParams || ''}
                                    onCellClicked={i?.onCellClicked}
                                    editable={i?.editable}
                                    type={i?.type || ''}
                                    cellClass={i?.cellClass || null}
                                    cellDataType={i?.cellClass || null}
                                    sortable={i?.sortable}
                                    tooltipValueGetter ={i?.tooltipValueGetter}
                                    {...properties}
                                />
                            );
                        })}
                    </AgGridReact>
                </div>
            </div>
        </>
    );
};

Grid.propTypes = {
    gridRef: PropTypes.object.isRequired,
    isEnclosed: PropTypes.bool.isRequired,
    viewName: PropTypes.string.isRequired,
    gridCols: PropTypes.array.isRequired,
    resetSelection: PropTypes.func
};

export default React.memo(Grid);
