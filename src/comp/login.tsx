import {
	Box,
	Button,
	Link,
	TextField,
	Typography,
	Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function Login() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={{
				minHeight: "100vh",
				width: "100vw",
				backgroundColor: theme.palette.background.default,
				overflow: "hidden",
				display: "grid",
				gridTemplateColumns: isMobile ? "1fr" : "1.05fr 1.2fr",
			}}
		>
				{/* Left panel */}
				<Box
					sx={{
						p: isMobile ? 3 : 5,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						gap: 4,
					}}
				>
					<Box>
						{/* Logo */}
						<Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
							<Box
								sx={{
									width: 56,
									height: 56,
									borderRadius: "50%",
									bgcolor: "primary.main",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "primary.contrastText",
								}}
							>
								<Typography variant="h5" fontWeight={700}>
									C
								</Typography>
							</Box>
							<Typography
								variant="h4"
								color="primary"
								fontWeight={700}
							>
								Carsy
							</Typography>
						</Box>

						<Typography
							variant="h5"
							fontWeight={700}
							sx={{ mb: 1 }}
						>
							Witaj w Carsy
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ maxWidth: 360, mb: 2, fontWeight: 600 }}
						>
							Cyfrowy grafik dla prawdziwych fachowców
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ maxWidth: 360 }}
						>
							Serwis auta, który szanuje Twój czas.
						</Typography>
					</Box>

					{/* Form */}
					<Box sx={{ maxWidth: 420, display: "flex", flexDirection: "column" }}>
						<TextField
							label="Email"
							placeholder="twoj@email.com"
							fullWidth
							sx={{ mb: 2 }}
						/>
						<TextField
							label="Hasło"
							placeholder="••••••••"
							type="password"
							fullWidth
							sx={{ mb: 3 }}
						/>
						<Button
							variant="contained"
							size="large"
							sx={{ borderRadius: 999, py: 1.3 }}
						>
							Zaloguj się
						</Button>
					</Box>

					{/* Footer links */}
					<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
						<Link
							href="#"
							underline="hover"
							color="text.secondary"
							variant="body2"
						>
							Nie pamiętam hasła
						</Link>
						<Link
							href="#"
							underline="hover"
							color="text.secondary"
							variant="body2"
						>
							Problem z aplikacją?
						</Link>
						<Link
							href="#"
							underline="hover"
							color="text.secondary"
							variant="body2"
						>
							Kontakt
						</Link>
					</Box>
				</Box>

				{/* Right panel (image placeholder) */}
				{!isMobile && (
					<Box
						sx={{
							position: "relative",
							bgcolor: "grey.200",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								width: "75%",
								height: "70%",
								borderRadius: 3,
								bgcolor: "grey.300",
							}}
						/>


						<Divider
							sx={{
								position: "absolute",
								bottom: 0,
								left: 0,
								right: 0,
								opacity: 0.2,
							}}
						/>
					</Box>
				)}
		</Box>
	);
}
