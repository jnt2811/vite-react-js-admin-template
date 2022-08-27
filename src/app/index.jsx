import { LoadingOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Sider } from "../layouts";
import { routes } from "./routes";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Sider />

        <Layout>
          <Header />

          <Layout.Content>
            <Routes>
              {routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Suspense fallback={<LoadingOutlined />}>{route.element}</Suspense>}
                />
              ))}
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default MainRoute;
