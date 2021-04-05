import { Container } from "reactstrap";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import { Button, Label, FormGroup, CustomInput } from "reactstrap";

const LoginForm = () => {
    return (
      <Container>
        <AvForm>
          <AvField name="name" label="Name" required />
        </AvForm>
      </Container>
    );
  };
  
  export default LoginForm;