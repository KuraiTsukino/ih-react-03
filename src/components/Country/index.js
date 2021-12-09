import React from "react";
import { useParams } from "react-router-dom";

export default function Country(props) {
  // Obtenemos por props el JSON
  const allCountries = props.allCountries;
  
  // Extraemos los valores dinámicos de la URL
  const params = useParams();
  
  // Obtenemos el valor dinámico del ID del país
  const singleCountryCode = params.id;
  
  // Comparamos el ID del país contra todos los países para encontrar el coincidente
  const foundCountry = allCountries.filter((e) => {
    return e.cca3 === singleCountryCode;
  });

  return (
    <div>
      {foundCountry.map((e, index) => {
        return (
          <div key={index} className="w-full bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {e.flag} {e.name.common}
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Official Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {e.name.official}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Region</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {e.region}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Subregion
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {e.subregion}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        );
      })}
    </div>
  );
}
