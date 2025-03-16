const PlayerId = async ({ params }) => {
  const { playerId } = await params;

  return <main>PlayerId: {playerId}</main>;
};

export default PlayerId;
