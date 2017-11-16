class Api::ProductsController < ApplicationController
  # before_action :set_products, only: [:show, :update, :destroy]

  def index
    render json: Product.all
  end

  def destory
    Product.find(params[:id]).destroy
    render json: { message: 'Product deleted!'}
  end

  def update

  end

  private

  # def set_product
  #   @product = Product.find(params[:id])    
  # end

  def api_product_params
    params.require(:product).permit(:name, :description, :price, :department, :logo)
  end
end
