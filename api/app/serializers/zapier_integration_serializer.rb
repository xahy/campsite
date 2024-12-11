# frozen_string_literal: true

class ZapierIntegrationSerializer < ApiSerializer
  api_field :public_id, name: :id
  api_field :token
end
