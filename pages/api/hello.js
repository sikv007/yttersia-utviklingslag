// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: '',
      type: 'resturant',
      description: 'Big resturant',
      position: {
        lat: 0,
        lng: 0,
      },
    },
  ]);
}
