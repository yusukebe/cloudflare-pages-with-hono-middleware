export const onRequest: PagesPluginFunction = async (context) => {
  const response = await context.next()
  response.headers.append('X-Message', 'Hello')
  return response
}
