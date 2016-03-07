class BootsController < ApplicationController
  def show
    @boot = Boot.find_by(slug: params["id"])
    @projects = @boot.cohort.projects
    p @projects
    @preferences = @boot.preference_hash
    p @preferences
  end

  def vote
    p params
    render json: {status:200, response:'ooorah!'}
  end
end
