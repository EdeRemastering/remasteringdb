import React from 'react'
import { Button } from './ui/button';

export const LogoutButton = () => {

    const logout = () => {
        window.location.href = "http://localhost:4000/auth/logout";
    }

  return (
    <Button type="button" variant='destructive' className="w-full" onClick={logout}>
      Logout
    </Button>
  )
}
