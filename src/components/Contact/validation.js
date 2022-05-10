export function validateNameMessage(res) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (res.value.length === 0) {
    errors.push(res.name + " can't be empty");
  }

  if (res.value.length < 3) {
    console.log(res.name);
    if (res.name === "user_message") {
      errors.push("Please enter a valid message at least 20 characters");
    }

    if (res.name === "user_name") {
      errors.push("Please enter a valid name");
    }
  } else {
    return false;
  }

  return errors;
}

// validate email
export function validateEmail(res) {
  const email = res.value;
  const errors = [];

  if (
    email.length < 5 ||
    email.split("").filter((x) => x === "@").length !== 1 ||
    email.indexOf(".") === -1
  ) {
    errors.push("Please enter a valide email");
  } else {
    return false;
  }

  return errors;
}
