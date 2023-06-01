import { Box, Grid, Image, Text } from '@mantine/core';

export const Home = () => {
  return (
    <div>
      <h1>Home Dashboard</h1>
      <Grid>
        <Grid.Col span={3}>
          <Box maw={240} mx="auto">
            <Image
              radius="md"
              src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
              alt="Random unsplash image"
              caption="My dog begging for treats"
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={3}>
          <Box maw={240} mx="auto">
            <Image
              radius="md"
              src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
              alt="Random unsplash image"
              caption="My dog begging for treats"
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={3}>
          <Box maw={240} mx="auto">
            <Image
              radius="md"
              src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
              alt="Random unsplash image"
              caption="My dog begging for treats"
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={3}>
          <Box maw={240} mx="auto">
            <Image
              radius="md"
              src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
              alt="Random unsplash image"
              caption="My dog begging for treats"
            />
          </Box>
        </Grid.Col>
      </Grid>
    </div>
  );
};
