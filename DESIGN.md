# The One SDK Design Decisions

## Services

The SDK is divided up into services in line with the corresponding API, i.e. Book, Movies, Characters, etc.

Each service is connected to the parent class which is imported when using the SDK.

Each service has at least two methods, one to retreive an item based on id, and another to query a collection of items.

## Code Structure

All business logic is contained within the `./src` directory, with three directories to organize code structure:

- /services = functions that call the-one-api
- /types = type declarations
- /util = helper functions

## Examples

To enable users to start playing around with the SDK immediately, the example directory has everything set up and available (except the API key) to start exploring the SDK prior to implementing it in a users own project.
