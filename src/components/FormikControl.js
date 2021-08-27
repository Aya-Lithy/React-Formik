import Input from "./Input";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "textArea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
