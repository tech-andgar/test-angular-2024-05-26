export interface ApiFailure {
  kind: 'ApiFailure';
  statusCode: number;
}

export interface UnexpectedFailure {
  kind: 'UnexpectedFailure';
  error: Error;
}

export interface AnonymousUserFailure {
  kind: 'AnonymousUserFailure';
}

export type ProcessFailure =
  | ApiFailure
  | UnexpectedFailure
  | AnonymousUserFailure;
