# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Section.create(:name => 'home_info', :long_name => 'Home:  Information')
Section.create(:name => 'home_news', :long_name => 'Home:  News')
Section.create(:name => 'ip_overview', :long_name => 'Intellectual Property & Food Security:  Overview')
Section.create(:name => 'ip_benefits', :long_name => 'Intellectual Property & Food Security:  Benefits')
Section.create(:name => 'ip_experts', :long_name => 'Intellectual Property & Food Security:  Experts')
Section.create(:name => 'upov_history', :long_name => 'UPOV:  History')
Section.create(:name => 'upov_origins', :long_name => 'UPOV:  Origins')
Section.create(:name => 'upov_provisions', :long_name => 'UPOV:  Main Provisions')
Section.create(:name => 'upov_infrastructure', :long_name => 'UPOV:  Infrastructure')
Section.create(:name => 'pvp_wto_trips', :long_name => 'Plant Variety Protection:  WTO-TRIPS')
Section.create(:name => 'pvp_cbd', :long_name => 'Plant Variety Protection:  CBD')
Section.create(:name => 'pvp_it', :long_name => 'Plant Variety Protection:  IT')
Section.create(:name => 'pvp_wipo', :long_name => 'Plant Variety Protection:  WIPO')
Section.create(:name => 'about_bg', :long_name => 'About Seeds for All:  Background')
Section.create(:name => 'about_activities', :long_name => 'About Seeds for All:  Activities')
Section.create(:name => 'about_members', :long_name => 'About Seeds for All:  Members')
Section.create(:name => 'about_board', :long_name => 'About Seeds for All:  Board')
Section.create(:name => 'about_staff', :long_name => 'About Seeds for All:  Staff')
Section.create(:name => 'contact', :long_name => 'Contact')