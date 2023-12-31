import ReactQueryProvider from '@/lib/utils/react-query-provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { storeConfig } from '../react-hands-v2';

// Define initial state and actions
const store = {
  count: 0,
  userState: null,
  local_userState: null,
  drawerOpen: true,
  notificationsOpen: false,
};

const actions = {
  decrement: (state: any) => ({ count: state.count - 1 }),
  increment: (state: any) => ({ count: state.count + 1 }),
  updateUser: (state: any, { payload }: any) => ({
    userState: payload,
    local_userState: payload,
  }),
  unSetUser: () => ({
    userState: null,
    local_userState: null,
  }),
  openDrawer: () => ({
    drawerOpen: true,
  }),
  closeDrawer: () => ({
    drawerOpen: false,
  }),
  toggleDrawer: (state: any) => ({
    drawerOpen: !state.drawerOpen,
  }),
  toggleNotifications: (state: any) => ({
    notificationsOpen: !state.notificationsOpen,
  }),
  closeNotifications: () => ({
    notificationsOpen: false,
  }),
};

// Configure the store
const StoreProvider = storeConfig(store, actions);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </ReactQueryProvider>
  );
}
