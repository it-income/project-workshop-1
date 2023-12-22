import Typography from "@mui/material/Typography";
import { Chip, Divider, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page({ data }: { data: any }) {
  const router = useRouter();
  const placeName = router.query.placeName || "";
  const [reviewsToneData, setReviewsToneData] = useState<null | {
    bad: number;
    good: number;
    neutral: number;
  }>(null);

  let bad,
    good,
    neutral = 0;

  if (reviewsToneData) {
    bad = Math.round(reviewsToneData.bad);
    good = Math.round(reviewsToneData.good);
    neutral = Math.round(reviewsToneData.neutral);
  }

  let reviews: string[] = [];
  if (data && data[placeName.toString()]) {
    // @ts-ignore
    reviews = [...new Set(data[placeName.toString()])];
  }

  useEffect(() => {
    fetch(`http://0.0.0.0:8000/analyze?restaurant_name=${placeName}`)
      .then((res) => res.json())
      .then((data) => {
        setReviewsToneData(data);
      });
  }, [placeName]);

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Заведение &laquo;{placeName}&raquo;
      </Typography>
      <Typography variant="h6" gutterBottom>
        Тональность отзывов:
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          label={`${good}% положительных`}
          variant="outlined"
          color="success"
        />
        <Chip
          label={`${neutral}% нейтральных`}
          variant="outlined"
          color="info"
        />
        <Chip
          label={`${bad}% отрицательных`}
          variant="outlined"
          color="error"
        />
      </Stack>
      <Divider sx={{ padding: "8px 0" }} />

      {reviews.map((review: string) => (
        <Card
          key={review}
          variant={"outlined"}
          sx={{ width: "100%", marginY: 1 }}
        >
          <CardContent>{review}</CardContent>
        </Card>
      ))}
    </>
  );
}
