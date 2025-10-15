import { StackHandler } from '@stackframe/stack';
import { stackServerApp } from '@/stack/server';

export default function Handler(props: { params: any; searchParams: any }) {
  return (
    <StackHandler
      app={stackServerApp}
      routeProps={props}
      fullPage={true}
      componentProps={{
        SignIn: { /* SignIn component props */ },
        SignUp: { /* SignUp component props */ },
        // ... other component props
      }}
    />
  );
}
