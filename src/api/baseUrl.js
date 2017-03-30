// @flow
export default function getBaseUrl(): string {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3001/'
    : 'https://blooming-hamlet-90166.herokuapp.com/';
}

function getQueryStringParameterByName(name: string): string | null {
  const url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
