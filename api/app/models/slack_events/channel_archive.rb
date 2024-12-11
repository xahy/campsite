# frozen_string_literal: true

module SlackEvents
  class ChannelArchive < EventCallback
    TYPE = "channel_archive"

    def handle
      HandleChannelArchiveJob.perform_async(params.to_json)
      { ok: true }
    end

    def channel_id
      event_params["channel"]
    end
  end
end
