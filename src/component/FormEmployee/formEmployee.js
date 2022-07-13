// import React, { Fragment } from 'react';
//
// import Button from '@atlaskit/button/standard-button';
// import Form, { Field, FormFooter } from '@atlaskit/form';
//
// import Textfield from '@atlaskit/textfield';
//
// export default function TextFieldFormExample() {
//     return (
//         <Form
//             onSubmit={(formState) =>
//                 console.log('form submitted', formState)
//             }
//         >
//             {({ formProps }) => (
//                 <form {...formProps}>
//                     <Field label="Add Employee Name" name="example-text">
//                         {({ fieldProps }) => (
//                             <Fragment>
//                                 <Textfield
//                                     placeholder="Enter your name"
//                                     {...fieldProps}
//                                 />
//                             </Fragment>
//                         )}
//                     </Field>
//                     <Field label="Add Employee Date" name="example-text">
//                         {({ fieldProps }) => (
//                             <Fragment>
//                                 <Textfield
//                                     placeholder="Enter your Birth Day"
//                                     {...fieldProps,}
//                                 />
//                             </Fragment>
//                         )}
//                     </Field>
//                     <Field label="Add Employee Date" name="example-text">
//                         {({ fieldProps }) => (
//                             <Fragment>
//                                 <Textfield
//                                     placeholder="Enter phone number"
//                                     {...fieldProps}
//                                 />
//                             </Fragment>
//                         )}
//                     </Field>
//                     <FormFooter>
//                         <Button type="submit" appearance="primary">
//                             Submit
//                         </Button>
//                     </FormFooter>
//                 </form>
//             )}
//         </Form>
//     );
// }