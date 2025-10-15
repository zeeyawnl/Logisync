import { StackHandler } from '@stackframe/stack';
import { stackServerApp } from '@/stack/server';
import { NextRequest } from 'next/server'; // optional if you want request typing

export default function Handler(props: { params: Record<string, string>; searchParams: URLSearchParams }) {
  return (
    <StackHandler
      app={stackServerApp}
      routeProps={props}
      fullPage={true}
      componentProps={{
        SignIn: {},
        SignUp: {},
        // ... other component props
      }}
    />
  );
}

