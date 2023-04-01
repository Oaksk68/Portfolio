export default function Validation(values) {
  const errors = {};

  const email_pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (values.user_name === "") {
    errors.user_name = "Name is required";
  }
  if (values.user_email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.user_name)) {
    errors.email = "Email is not right. Plese enter valid email address";
  }
}
