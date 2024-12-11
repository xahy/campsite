# frozen_string_literal: true

class V2MessageSerializer < ApiSerializer
  api_field :public_id, name: :id

  api_field :content, default: "" do |message|
    next if message.call
    next Message::DELETED_CONTENT if message.discarded?

    message.content
  end

  api_field :created_at
  api_field :updated_at

  api_field :parent_id, nullable: true do |message|
    message.reply_to&.public_id
  end
  api_field :thread_id do |message|
    message.message_thread.public_id
  end

  api_association :author, nullable: true, blueprint: V2AuthorSerializer
end
