import { useEffect, useState } from "react";
import { CarModel } from "../../models/CarModel";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axiosInstance from "../../utils/interceptors/axiosInterceptors";
import { useTranslation } from "react-i18next";
import "../../components/Dashboard/CarPanel/carPanel.css";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import "./carDetail.css";



const CarDetail = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();
  const { t } = useTranslation();
  const [car, setCar] = useState<CarModel>();
  const fetchCar = async () => {
    try {
      const response = await axiosInstance(`/v1/cars/${id}`);
      setCar(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCar();
  }, []);
  return (
    //TODO: UI
    <div className="row col-12 col-md-8 justify-content-center align-items-start">
      {isLoading && (
        <div className="display-1">
          <LoadingSpinner style1={{ width: "100px", height: "100px" }} />
        </div>
      )}
      {!isLoading && (
        <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
          <div className="col-12 col-md-6 ">
            <img
              className={`img-fluid rounded col-12 border border-secondary-subtle  `}
              src={`https://spring-render-ucd3.onrender.com/assets/${"car"}/${car?.image}`}
              />
          </div>
          <div className="col-12 col-md-6 border rounded border-2 p-2 border-warning fw-semibold">
            <div className="text-center fs-3 bg-warning mb-3 text-capitalize fw-bolder">
              <span id="detail-model-name">{car?.modelName}</span>
            </div>
            <div className="d-flex flex-row align-items-center gap-2 border-bottom border-2 rounded p-1">
              <span className="col-3 text-center text-light p-1 bg-success rounded">
                {t("plate")}
              </span>
              <TbArrowBigRightLineFilled color="black" />
              <span className="col-6">{car?.plate}</span>
            </div>
            <div className="d-flex flex-row align-items-center gap-2 border-bottom border-2 rounded p-1">
              <span className="col-3 text-center text-light p-1 bg-success rounded">
                {t("color")}
              </span>
              <TbArrowBigRightLineFilled color="black" />
              <span className="col-6">{car?.colorName}</span>
            </div>
            <div className="d-flex flex-row align-items-center gap-2 border-bottom border-2 rounded p-1">
              <span className="col-3 text-center text-light p-1 bg-success rounded">
                {t("kilometer")}
              </span>
              <TbArrowBigRightLineFilled color="black" />
              <span className="col-6">{car?.kilometer}</span>
            </div>
            <div className="d-flex flex-row align-items-center gap-2 border-bottom border-2 rounded p-1">
              <span className="col-3 text-center text-light p-1 bg-success rounded">
                {t("price")}
              </span>
              <TbArrowBigRightLineFilled color="black" />
              <span className="col-6">{car?.dailyPrice}</span>
            </div>
            <div className="d-flex flex-row align-items-center gap-2 border-bottom border-2 rounded p-1">
              <span className="col-3 text-center text-light p-1 bg-success rounded">
                {t("modelyear")}
              </span>
              <TbArrowBigRightLineFilled color="black" />
              <span className="col-6">{car?.year}</span>
            </div>
            <div className="d-flex flex-row align-items-center gap-2 border-bottom border-2 rounded p-1">
              <span className="col-3 text-center text-light p-1 bg-success rounded">
                {t("location")}
              </span>
              <TbArrowBigRightLineFilled color="black" />
              <span className="col-6">{car?.location}</span>
            </div>
            <div className="d-flex flex-row align-items-center gap-2 border-bottom border-2 rounded p-1">
              <span className="col-3 text-center text-light p-1 bg-success rounded">
                {t("status")}
              </span>
              <TbArrowBigRightLineFilled color="black" />
              <span className="col-6">{car?.status}</span>
            </div>
            <div className="d-flex flex-row justify-content-center mt-3 ">
              <Link
                to={`/vite-deploy/checkout/${car?.id}`}
                className="btn btn-primary mx-2 w-100"
              >
                {t("rent")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetail;
