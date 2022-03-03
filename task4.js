Post.aggregate([
  { $match: { deletedCheck: false } },
  {
    $lookup: {
      from: "comment",
      let: { Id: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$postId", "$$Id"] },
                { $eq: ["$deletedCheck", false] },
              ],
            },
          },
        },
      ],
      as: "comments",
    },
  },
  {
    $unwind: "$comments",
  },
]);
