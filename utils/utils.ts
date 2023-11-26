import qs from "query-string";

interface FormUrlQuery {
  searchParams: string;
  key: string;
  value: string;
}
interface RemoveKeyFromQuery {
  searchParams: string;
  keysToRemove: string[];
}
export const formUrlQuery = ({ searchParams, key, value }: FormUrlQuery) => {
  const params = qs.parse(searchParams);

  params[key] = value;

  const newUrl = qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: params,
    },
    { skipNull: true }
  );

  return newUrl;
};

export const removeKeyFromQuery = ({
  searchParams,
  keysToRemove,
}: RemoveKeyFromQuery) => {
  const params = qs.parse(searchParams);
  keysToRemove.forEach((key) => {
    delete params[key];
  });

  const newUrl = qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: params,
    },
    { skipNull: true }
  );

  return newUrl;
};
