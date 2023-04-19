import { mountRootParcel } from "single-spa";
import Parcel from "single-spa-react/parcel";

import { buttonLifecycles } from "@spms/angular-app";

export const AngularButton = () => {
  const someAngularProps = {
    cool: "yes",
  };
  return (
    <Parcel
      config={buttonLifecycles}
      mountParcel={mountRootParcel}
      handleError={(err) => console.error(err)}
      wrapStyle={{
        height: "100%",
      }}
      {...someAngularProps}
    />
  );
};
