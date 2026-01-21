import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import GoogleIcon from './GoogleIcon.tsx';

interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}

interface SignInFormElement extends HTMLFormElement {
  readonly elements: SignInFormElements;
}

export default function SignInSideTemplate() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: 420, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton>
                <BadgeRoundedIcon />
              </IconButton>
              <Typography variant="h6">Company logo</Typography>
            </Box>
          </Box>

          <Box component="main">
            <Stack spacing={3} mb={2}>
              <Box>
                <Typography variant="h4" component="h1">
                  Sign in
                </Typography>
                <Typography variant="body2">
                  New to company?{' '}
                  <Link href="#replace-with-a-link">Sign up!</Link>
                </Typography>
              </Box>
              <Button startIcon={<GoogleIcon />} variant="outlined" fullWidth>
                Continue with Google
              </Button>
            </Stack>

            <Divider>or</Divider>

            <Box component="form" onSubmit={(event: React.FormEvent<SignInFormElement>) => {
              event.preventDefault();
              const elems = event.currentTarget.elements;
              const data = {
                email: elems.email.value,
                password: elems.password.value,
                persistent: elems.persistent.checked,
              };
              // eslint-disable-next-line no-alert
              alert(JSON.stringify(data, null, 2));
            }} sx={{ mt: 3 }}>
              <FormControl fullWidth margin="normal">
                <FormLabel>Email</FormLabel>
                <TextField name="email" type="email" variant="outlined" fullWidth />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <FormLabel>Password</FormLabel>
                <TextField name="password" type="password" variant="outlined" fullWidth />
              </FormControl>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Checkbox name="persistent" />
                  <Typography variant="body2">Remember me</Typography>
                </Box>
                <Link href="#replace-with-a-link">Forgot your password?</Link>
              </Box>

              <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
                Sign in
              </Button>
            </Box>
          </Box>

          <Box component="footer" sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="caption">© Your company {new Date().getFullYear()}</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: { xs: 0, md: '50vw' }, display: { xs: 'none', md: 'block' }, backgroundImage: 'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)', backgroundSize: 'cover' }} />
    </Box>
  );
}