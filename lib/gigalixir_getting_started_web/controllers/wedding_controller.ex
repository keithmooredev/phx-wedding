defmodule GigalixirGettingStartedWeb.WeddingController do
  use GigalixirGettingStartedWeb, :controller

  def index(conn, _params) do
    wd = Application.fetch_env!(:gigalixir_getting_started, :wedding_date)

    conn
    |> put_status(:accepted)
    |> json(%{wedding_date: wd})
  end
end
