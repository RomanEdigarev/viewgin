import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  donutChartDataSelector,
  fetchData,
  lineChartDataSelector,
} from "./features/dataSlice";
import LoginForm from "./components/LoginForm/LoginForm";
import {
  authFetchStatusSelector,
  fetchLogin,
  isAuthSelector,
} from "./features/authSlice";
import { loadingStateSelector, toggleLoading } from "./features/loadingSlice";
import { ErrorModal } from "./components/ErrorModal/ErrorModal";
import Loading from "./components/Loading/Loading";
import ChartsContainer from "./components/Charts/ChartsContainer";
import { DataForAuth } from "./features/types";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);
  const authFetchStatus = useSelector(authFetchStatusSelector);
  const lineChartData = useSelector(lineChartDataSelector);
  const donutChartData = useSelector(donutChartDataSelector);
  const isLoading = useSelector(loadingStateSelector);

  const login = async (data: DataForAuth) => {
    dispatch(toggleLoading());
    await dispatch(fetchLogin({ ...data }));
  };

  useEffect(() => {
    const fetch = async () => {
      if (isAuth) {
        await dispatch(fetchData());
        dispatch(toggleLoading());
      }
    };
    fetch();
  }, [isAuth]);

  const error = authFetchStatus === "error" ? <ErrorModal /> : null;
  const loading = isLoading ? <Loading /> : null;
  const content = isAuth ? (
    <ChartsContainer
      dataForDonutCharts={donutChartData}
      dataForLineCharts={lineChartData}
    />
  ) : (
    <LoginForm login={login} />
  );

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {error || loading || content}
      </div>
    </div>
  );
}

export default App;
