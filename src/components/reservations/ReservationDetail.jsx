import React, {useState} from 'react';
import PageHeader from '../common/pageHeader/PageHeader';
import { Tab, Tabs, Box } from '@mui/material';
import CustomTabPanel from '../common/tabs/CustomTabPanel';
import General from './include/General';
import { Formik } from 'formik';

const ReservationDetail = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <>
            <div className="clearfix">
                <div className="container-fluid form-container">
                    <div className="form-section">
                        <PageHeader name="Reservation Detail" />

                        <div className="card form-body" style={{ minHeight: '20vh' }}>
                            <div className="form-section">
                                {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    //validationSchema={SignInSchema}
                                    onSubmit={(values) => {
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <>
                                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                <Tab label="General" {...a11yProps(0)} />
                                                <Tab label="Item Two" {...a11yProps(1)} />
                                                <Tab label="Item Three" {...a11yProps(2)} />
                                            </Tabs>


                                            {/* </Box> */}

                                            <CustomTabPanel value={value} index={0}>
                                                <General errors={errors} touched={touched} />
                                            </CustomTabPanel>
                                            <CustomTabPanel value={value} index={1}>
                                                Item Two
                                            </CustomTabPanel>
                                            <CustomTabPanel value={value} index={2}>
                                                Item Three
                                            </CustomTabPanel>
                                        </>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}
export default ReservationDetail;