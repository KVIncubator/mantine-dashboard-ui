import { useMemo } from 'react';
import * as lodash from 'lodash';

function useAuthority(userAuthority: string[] = [], authority: string[] = [], emptyCheck = false) {
  const roleMatched = useMemo(
    () => authority.some((role) => userAuthority.includes(role)),
    [authority, userAuthority]
  );

  if (
    lodash.isEmpty(authority) ||
    lodash.isEmpty(userAuthority) ||
    typeof authority === 'undefined'
  ) {
    return !emptyCheck;
  }

  return roleMatched;
}

export default useAuthority;
