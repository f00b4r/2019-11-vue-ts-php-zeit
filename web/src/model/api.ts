export const api = {
  async users(): Promise<any> {
    const res = await fetch('/api/v1/users');
    return await res.json();
  },

  async pricing(): Promise<any> {
    const res = await fetch('/api/v1/pricing');
    return await res.json();
  }
};
