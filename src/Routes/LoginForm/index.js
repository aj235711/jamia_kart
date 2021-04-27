import { Container, Col, Row } from "reactstrap";
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
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Label, FormGroup, CustomInput } from "reactstrap";
import JamiaKart from "../../utils/JamiaKart.jpg";
import Nav from "./Nav";
import {serverLink} from '../../utils/constans';
import {toast} from 'react-toastify';
const qs = require("qs");

const LoginForm = () => {
  const history = useHistory();
  const handleSubmit = (event, values) => {
    console.log(values);
    axios
      .post(
        `${serverLink}/login/`,
        qs.stringify({
          username: values.email,
          password: values.password,
        })
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("jwt", res.data.access_token);
        toast.dark('Logged in successfully');
        axios.get(`${serverLink}/user/`, {
          headers:{
            "Authorization":"bearer "+localStorage.getItem('jwt')
        }
        }).then(res => localStorage.setItem('user', JSON.stringify(res.data))).catch(err => console.log(err));
        history.push("/jamia_kart");
        console.log(JSON.parse(localStorage.getItem('user')));
      }).catch(err => alert('Wrong username or password'));
  };

  return (
    <>
      <Nav />
      <div
        className="d-flex align-items-center justify-content-center bg-light"
        style={{ height: "90vh" }}
      >
        <Col
          md="3"
          className="border border-secondary rounded p-4 bg-white m-3"
        >
          <Col md="12">
            <AvForm onValidSubmit={handleSubmit}>
              <Col md="12" className="d-flex justify-content-center">
                <img src={JamiaKart} className="w-100 pb-2 px-5" />
              </Col>
              <Row>
                <Col md="12">
                  <AvField name="email" label="Email" type="email" required />
                </Col>
                <Col md="12">
                  <AvField
                    name="password"
                    label="Password"
                    type="password"
                    required
                  />
                </Col>
                <FormGroup className="w-100 d-flex justify-content-center">
                  <Button type="submit" outline color="info">
                    Sign In
                  </Button>
                </FormGroup>
                <FormGroup className="w-100 d-flex justify-content-center align-items-center">
              <div>Don't have an account?</div>
              <div className="ml-3" style={{color: '#332288', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => history.push('/register')}>
                Register
              </div>
            </FormGroup>
              </Row>
            </AvForm>
          </Col>
        </Col>
      </div>
    </>
  );
};

export default LoginForm;
