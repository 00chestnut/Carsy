import {
	Box,
	Button,
	Link,
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
				gridTemplateColumns: isMobile ? "1fr" : "40vw 1fr",
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
                    marginLeft: isMobile ? 0 : 6,
                    marginRight: isMobile ? 0 : 6,
				}}
			>
				<Box> 
                    {/* header, intro needs to be separated */}
					{/* Logo */}
					<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mb: 4}}>
						<Box>
                            <Typography variant="h6" color="primary" fontWeight={700} sx={{ m: 0 }}>🚗logo</Typography>
						</Box>
						<Typography
							variant="h5"
							color="primary"
							fontWeight={650}
						>
							Witaj w Carsy
						</Typography>
					</Box>
                    {/* Intro text */}
                    <Typography
                        variant="h4"
                        color="primary"
                        sx={{ maxWidth: 360, mb: 3, mt: 10, fontWeight: 700 }}
                    >
                        Cyfrowy grafik dla prawdziwych fachowców
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{ maxWidth: 360, fontWeight: 600 }}
                    >
                        Serwis auta, który szanuje Twój czas.
                    </Typography>
				</Box>

				{/* Form */}
                <Box sx={{ 
                    maxWidth: 420, 
                    width: "100%",
                    display: "flex", 
                    flexDirection: "column", 
                    gap: 3, 
                    justifyContent: "center", 
                    alignItems: "center", 
                    mx: "auto"
                }}>
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{ borderRadius: 999, py: 1.3 }}
                    >
                        Zaloguj się
                    </Button>
                    <Button
                        color="secondary"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                            borderRadius: 999,
                            py: 1.3,
                            backgroundColor: 'secondary.main',
                            '&:hover': { backgroundColor: 'primary.main' },
                        }}
                    >
                        Załóż konto
                    </Button>
                </Box>

				{/* Footer links */}
				<Box sx={{ display: "flex", flexDirection: "column", gap: 1.25, alignItems: 'flex-start' }}>
					<Link
						href="#"
						underline="none"
						color="text.secondary"
						variant="body2"
						sx={{
							position: 'relative',
							py: 0.4,
							transition: 'color .18s ease',
							'&:hover': { color: 'primary.main' },
							'&:after': {
								content: '""',
								position: 'absolute',
								left: 0,
								bottom: 0,
								height: 2,
								width: 0,
								bgcolor: 'primary.main',
								transition: 'width .18s ease',
							},
							'&:hover:after': { width: '100%' },
						}}
					>
						Nie pamiętam hasła
					</Link>
					<Link
						href="#"
						underline="none"
						color="text.secondary"
						variant="body2"
						sx={{
							position: 'relative',
							py: 0.4,
							transition: 'color .18s ease',
							'&:hover': { color: 'primary.main' },
							'&:after': {
								content: '""',
								position: 'absolute',
								left: 0,
								bottom: 0,
								height: 2,
								width: 0,
								bgcolor: 'primary.main',
								transition: 'width .18s ease',
							},
							'&:hover:after': { width: '100%' },
						}}
					>
						Problem z aplikacją?
					</Link>
					<Link
						href="#"
						underline="none"
						color="text.secondary"
						variant="body2"
						sx={{
							position: 'relative',
							py: 0.4,
							transition: 'color .18s ease',
							'&:hover': { color: 'primary.main' },
							'&:after': {
								content: '""',
								position: 'absolute',
								left: 0,
								bottom: 0,
								height: 2,
								width: 0,
								bgcolor: 'primary.main',
								transition: 'width .18s ease',
							},
							'&:hover:after': { width: '100%' },
						}}
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
