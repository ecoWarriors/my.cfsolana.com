export enum VerificationState {
  UNKNOWN,
  ANONYMOUS,
  PARTIAL,
  PENDING,
  REVIEW,
  SUSPENDED,
  VERIFIED,
}

// returns display text for given status
export const parseVerificationState = (status: VerificationState = VerificationState.UNKNOWN) => {
  switch (status) {
    case VerificationState.UNKNOWN:
      return 'Not Verified';
    case VerificationState.ANONYMOUS:
      return 'Not Verified';
    case VerificationState.PARTIAL:
      return 'Needs More Info';
    case VerificationState.PENDING:
      return 'Verification Pending';
    case VerificationState.REVIEW:
      return 'Verification In Review';
    case VerificationState.SUSPENDED:
      return 'Suspended';
    case VerificationState.VERIFIED:
      return 'Verified';
    default:
      return 'Not Verified';
  }
};
