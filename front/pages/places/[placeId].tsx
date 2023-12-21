import Typography from "@mui/material/Typography";
import { Chip, Divider, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Заведение {router.query.placeId}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Тональность отзывов:
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip label="50% положительных" variant="outlined" color="success" />
        <Chip label="10% нейтральных" variant="outlined" color="info" />
        <Chip label="40% отрицательных" variant="outlined" color="error" />
      </Stack>
      <Divider sx={{ padding: "8px 0" }} />
    </>
  );
}