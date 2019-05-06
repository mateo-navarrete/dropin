import { withGetAuthStatus } from '../../containers';

const WrappedComponent = props => null;

export const AuthStatusListener = withGetAuthStatus(WrappedComponent);
