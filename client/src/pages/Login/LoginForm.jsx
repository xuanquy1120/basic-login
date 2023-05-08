import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import InputField from "components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function LoginForm({ onSubmit }) {
  const handleSubmit = async (values) => {
    await onSubmit(values);
  };

  const schema = yup.object().shape({
    username: yup.string().required("Hãy nhập tài khoản"),
    password: yup.string().required("Hãy nhập mật khẩu"),
  });

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          display="flex"
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper elevation={2} sx={{ padding: 5 }}>
            <Grid
              component="form"
              onSubmit={form.handleSubmit(handleSubmit)}
              container
              direction="column"
              spacing={2}
            >
              {/* avatar-icon */}
              <Grid item>
                <Avatar
                  sx={{ m: 1, bgcolor: "secondary.main", margin: "auto" }}
                >
                  <LockOutlinedIcon />
                </Avatar>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ textAlign: "center" }}
                >
                  Đăng nhập
                </Typography>
              </Grid>
              {/* email */}
              <Grid item>
                <InputField
                  name="username"
                  form={form}
                  label="username"
                  disabled={form.formState.isSubmitting}
                />
              </Grid>
              {/* password */}
              <Grid item>
                <InputField
                  name="password"
                  type="password"
                  form={form}
                  label="Password"
                  disabled={form.formState.isSubmitting}
                />
              </Grid>
              {/* checkbox - Remember  */}
              <Grid item>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Nhớ tài khoản"
                />
              </Grid>
              {/* submit */}
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={form.formState.isSubmitting}
                >
                  Đăng nhập
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

export default LoginForm;
