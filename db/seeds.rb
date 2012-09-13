# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Section.create(:name => 'home_info', :longname => 'Home:  Information')
Section.create(:name => 'home_news', :longname => 'Home:  News')
Section.create(:name => 'ip_overview', :longname => 'Intellectual Property & Food Security:  Overview')
Section.create(:name => 'ip_benefits', :longname => 'Intellectual Property & Food Security:  Benefits')
Section.create(:name => 'ip_experts', :longname => 'Intellectual Property & Food Security:  Experts')
Section.create(:name => 'upov_history', :longname => 'UPOV:  History')
Section.create(:name => 'upov_origins', :longname => 'UPOV:  Origins')
Section.create(:name => 'upov_provisions', :longname => 'UPOV:  Main Provisions')
Section.create(:name => 'upov_infrastructure', :longname => 'UPOV:  Infrastructure')
Section.create(:name => 'pvp_wto_trips', :longname => 'Plant Variety Protection:  WTO-TRIPS')
Section.create(:name => 'pvp_cbd', :longname => 'Plant Variety Protection:  CBD')
Section.create(:name => 'pvp_it', :longname => 'Plant Variety Protection:  IT')
Section.create(:name => 'pvp_wipo', :longname => 'Plant Variety Protection:  WIPO')
Section.create(:name => 'about_bg', :longname => 'About Seeds for All:  Background')
Section.create(:name => 'about_activities', :longname => 'About Seeds for All:  Activities')
Section.create(:name => 'about_members', :longname => 'About Seeds for All:  Members')
Section.create(:name => 'about_board', :longname => 'About Seeds for All:  Board')
Section.create(:name => 'about_staff', :longname => 'About Seeds for All:  Staff')
Section.create(:name => 'contact', :longname => 'Contact')