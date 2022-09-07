import type { ErrorRequestHandler } from "express";

interface Error {
  type: string;
  message: string | string[];
}

//422
export function unprocessableError(error: string[]): Error {
  return { type: "error_unprocessable_entity", message: error };
}

//401
export function missingHeaderError(header: string): Error {
  return {
    type: "error_unauthorized",
    message: header,
  };
}

//404
export function notFoundError(value: string): Error {
  return {
    type: "error_not_found",
    message: `Could not find specified ${value}`,
  };
}

//409
export function conflictError(value: string): Error {
  return {
    type: "error_conflict",
    message: `${value} already exists`,
  };
}

//403
export function accessDeniedError(value: string): Error {
  return {
    type: "error_access_denied",
    message: `Unable to ${value}`,
  };
}

//401
export function unauthorizedError(value: string): Error {
  return {
    type: "error_unauthorized",
    message: `${value} is invalid`,
  };
}

//400
export function badRequestError(value: string): Error {
  return {
    type: "error_bad_request",
    message: `${value}`,
  };
}

//406
export function notAcceptableError(value: string): Error {
  return {
    type: "error_not_acceptable",
    message: `${value}`,
  };
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.type === "error_unprocessable_entity") {
    return res.status(422).send(err.message);
  }

  if (err.type === "error_unauthorized") {
    return res.status(401).send(err.message);
  }

  if (err.type === "error_not_found") {
    return res.status(404).send(err.message);
  }

  if (err.type === "error_conflict") {
    return res.status(409).send(err.message);
  }

  if (err.type === "error_access_denied") {
    return res.status(403).send(err.message);
  }
  if (err.type === "error_unauthorized") {
    return res.status(401).send(err.message);
  }
  if (err.type === "error_bad_request") {
    return res.status(400).send(err.message);
  }
  if (err.type === "error_not_acceptable") {
    return res.status(406).send(err.message);
  }

  return res.status(500).send(err.message);
};

export default errorHandler;
