export const getAuthHeader = (launchParams: Record<string, string | number> | undefined) => ({
  Authorization: `Bearer ${new URLSearchParams(launchParams as unknown as Record<string, string>).toString()}`,
});
