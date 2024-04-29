import React, { useEffect, useMemo, useState } from 'react'
import Form from '@rjsf/mui';
import schema from './schema';
// import uiSchema from './uiSchema.json';
import validator from "@rjsf/validator-ajv6";
import { Grid } from '@mui/material';
import { Description } from '../Description/Description';

const UserForm = () => {
    const [formData, setFormData] = React.useState(null); // final output of the form
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [currentProperty, setCurrentProperty] = useState('');
    const [description, setDescription] = useState('');

    // Function to update description based on property
    const updateDescription = (property: any) => {
        if (property && schema?.schema?.properties[property.split("_")[1]]) {
            setDescription(schema.schema?.properties[property.split("_")[1]]?.properties[property.split("_")[2]].fieldDescription.map((item: any) => {
                return item?.description
            }));
        } else {
            setDescription('');
        }
    };

    const handleFocusChange = (property: any) => {
        setCurrentProperty(property);
        setIsDescriptionOpen(true);
    };

    const handleCloseClick = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };
    
    function transformErrors(errors: any) {
        return errors.map((error: any) => {
            if (error.name === "pattern" && error.property === ".AuthenticationMechanism.accessKey") {
                error.message = "Please enter a valid Access key that starts with either 'ASIA,' 'AKIA,' 'AROA,' or 'AIDA,' followed by one or more uppercase letters or numbers";
            }
            if (error.name === "pattern" && error.property === ".AuthenticationMechanism.secretKey") {
                error.message = "Please enter a valid Secret key which includes alphanumeric values, + and /";
            }
            if (error.name === "pattern" && error.property === ".bucketConfiguration.bucketName") {
                error.message = "Please enter a valid Bucket name which includes lowercase letters, numbers, and dashes except uppercase letters and special characters";
            }
            return error;
        });
    }

    useEffect(() => {
        updateDescription(currentProperty);
    }, [currentProperty]);

    const renderForm = () => {
        return (
            <Grid container sx={{ p: 4, display: "flex", justifyContent: "space-between" }}>
                <Grid item lg={isDescriptionOpen ? 8 : 12} md={isDescriptionOpen ? 8 : 12}>
                    <Form
                        schema={schema.schema}
                        // uiSchema={uiSchema}
                        validator={validator}
                        transformErrors={transformErrors}
                        liveValidate
                        onChange={e => {
                            setFormData(e.formData)
                        }}
                        showErrorList={false}
                        onFocus={(e) => {
                            handleFocusChange(e)
                        }}
                        onSubmit={() => { console.log(formData) }}
                    />
                </Grid>
                <Grid item lg={4} md={4} pt={4}>
                    {
                        isDescriptionOpen ? <Description description={description} onClose={handleCloseClick} /> : <></>
                    }
                </Grid>
            </Grid>
        );
    };

    return (
        <>
            {renderForm()}
        </>
    )
}

export default UserForm