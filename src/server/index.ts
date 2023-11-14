import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [45, 65, 78];
  }),
});

export typer AppRouter = typeof appRouter