class BootsController < ApplicationController
  def show
    @boot = Boot.find_by(slug: params["id"])
    @projects = @boot.cohort.projects
    p @projects
    @preferences = @boot.preference_hash
    p @preferences
  end

  def vote
    boot = Boot.find_by(slug: params["id"])
    boot.preferences.each{|pref| pref.destroy}
    boot_id = boot.id
    params['projects'].each do |p_id, rank|
      Preference.create ({boot_id:boot_id, project_id:p_id, rank:rank})
    end
    render json: {status:200, response:'ooorah!'}
  end
end
