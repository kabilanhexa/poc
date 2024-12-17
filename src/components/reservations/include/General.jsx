import React, {memo} from 'react';
import { Field } from 'formik';
import DateSelector from '../../../common/datePicker/DatePicker';

const General = () => {
    return (
        <>

            <div className="controls row mb-3">
                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Hotel List</label>
                        <Field readOnly="false" className='control' placeholder="Select Hotels" as="select" name="hotel">
                            <option value="hotel1">Hotel1</option>
                            <option value="hotel1">Hotel2</option>
                            <option value="hotel3">Hotel3</option>
                        </Field>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Request Date</label>
                        <DateSelector
                            id="requestDate"
                            name="requestDate"
                            className='control'
                            placeholder="Request Date"
                        />
                    </div>
                </div>



                {/* <div className="col-md-3">
                    <div className={`checkbox-wrapper`}>
                    <label>
                        <Field className="" type="checkbox" name="status" />
                        Status
                    </label>
                    </div>
                </div> */}
            </div>

            <div className="controls row mb-3">
                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>ID</label>
                        <Field 
                            type="text"
                            id="id"
                            name="id" 
                            className='control'
                            placeholder="ID"
                         />
                    </div>
                </div>


                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Master ID</label>
                        <Field 
                            type="text"
                            id="id"
                            name="id" 
                            className='control'
                            placeholder="Master ID"
                         />
                    </div>
                </div>


                
                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Customer</label>
                        <Field 
                            type="text"
                            id="id"
                            name="id" 
                            className='control'
                            placeholder="Enter Customer"
                         />
                    </div>
                </div>
            </div>

            <div className="controls row mb-3">
                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Team/DR</label>
                        <Field 
                            type="text"
                            id="id"
                            name="id" 
                            className='control'
                            placeholder="Enter Team/DR"
                         />
                    </div>
                </div>


                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Work Location</label>
                        <Field 
                            type="text"
                            id="id"
                            name="id" 
                            className='control'
                            placeholder="Enter Work Location"
                         />
                    </div>
                </div>


                
                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Customer</label>
                        <Field 
                            type="text"
                            id="id"
                            name="id" 
                            className='control'
                            placeholder="Enter Customer"
                         />
                    </div>
                </div>


            </div>

            <div className="controls row mb-3">
                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Phone</label>
                        <Field 
                            type="text"
                            id="phone"
                            name="phone" 
                            className='control'
                            placeholder="Enter Phone"
                         />
                    </div>
                </div>

                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Phone1</label>
                        <Field 
                            type="text"
                            id="phone"
                            name="phone" 
                            className='control'
                            placeholder="Enter Phone1"
                         />
                    </div>
                </div>


                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Fax</label>
                        <Field 
                            type="text"
                            id="fax"
                            name="fax" 
                            className='control'
                            placeholder="Enter Fax"
                         />
                    </div>
                </div>


                
                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Email</label>
                        <Field 
                            type="text"
                            id="email"
                            name="email" 
                            className='control'
                            placeholder="Enter Email"
                         />
                    </div>
                </div>
            </div>

            <div className="controls row mb-3">
                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Pref 1</label>
                        <Field 
                            type="text"
                            id="pref1"
                            name="pref1" 
                            className='control'
                            placeholder="Enter Pref 1"
                         />
                    </div>
                </div>

                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Pref 22</label>
                        <Field 
                            type="text"
                            id="pref2"
                            name="pref2" 
                            className='control'
                            placeholder="Enter Pref 2"
                         />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={`input-wrapper`}>
                        <label className='input-label'>Reason</label>
                        <Field readOnly="false" className='control' placeholder="Select reasons" as="select" name="hotel">
                            <option value="reason1">Reason1</option>
                            <option value="reason2">Reason2</option>
                            <option value="reason3">Reason3</option>
                        </Field>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(General);