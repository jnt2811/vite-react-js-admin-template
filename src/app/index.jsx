import { LoadingOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import { Layout } from "antd";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Sider } from "../layouts";
import { routes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Sider />

        <Layout>
          <Header />

          <Layout.Content css={styleContent}>
            <Routes>
              {routes.map((route) => (
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

const styleContent = css({
  padding: 20,
});
