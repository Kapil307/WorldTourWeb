import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "./ui/Loader";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null); // default null

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  // Render loader until country is fetched
  if (isPending || !country) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          <img
            src={country.flags?.svg}
            alt={country.flags?.alt || "flag"}
            className="flag"
          />
          <div className="country-content">
            <p className="card-title">{country.name?.official}</p>

            <div className="infoContainer">
              <p>
                <span className="card-description">Native Names: </span>
                {country.name?.nativeName
                  ? Object.values(country.name.nativeName)
                      .map((n) => n.common)
                      .join(", ")
                  : "N/A"}
              </p>

              <p>
                <span className="card-description">Population: </span>
                {country.population?.toLocaleString() || "N/A"}
              </p>

              <p>
                <span className="card-description">Region: </span>
                {country.region || "N/A"}
              </p>

              <p>
                <span className="card-description">Sub Region: </span>
                {country.subregion || "N/A"}
              </p>

              <p>
                <span className="card-description">Capital: </span>
                {country.capital?.join(", ") || "N/A"}
              </p>

              <p>
                <span className="card-description">Top Level Domain: </span>
                {country.tld?.[0] || "N/A"}
              </p>

              <p>
                <span className="card-description">Currencies: </span>
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((c) => c.name)
                      .join(", ")
                  : "N/A"}
              </p>

              <p>
                <span className="card-description">Languages: </span>
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
