export async function isReqValid(
    schema,
    body
  ) {
      try {
        await schema.validate(body);
      } catch (error) {
        return false;
      }
    return true;
  }