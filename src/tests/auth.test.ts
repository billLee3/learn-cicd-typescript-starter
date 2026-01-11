import { expect, test } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth";

const passingHeaders = {
  authorization: "ApiKey adfaaaefeafewfaewfa",
} as IncomingHttpHeaders;

const invalidAuthHeaders: IncomingHttpHeaders = {
  authorization: "Bearer",
};

const undefinedHeaders: IncomingHttpHeaders = {
  authorization: undefined,
};

test("Undefined authorization header", () => {
  expect(getAPIKey(undefinedHeaders)).toBe(null);
});

test("Invalid authorization header", () => {
  expect(getAPIKey(invalidAuthHeaders)).toBeFalsy();
});

test("Passing test with authorizatin header", () => {
  expect(getAPIKey(passingHeaders)).toBe("adfaaaefeafewfaewfa");
});
