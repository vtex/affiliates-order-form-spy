# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Issue with orderform. Avoid Creating new orderform when user is not logged. A new orderForm deletes cart items when user is not logged

## [1.0.1] - 2022-10-14

### Fix

- TTL and Timeout adjustments

## [1.0.0] - 2022-10-14

### Fix

- Major of affiliates to fix the lead flow

## [0.1.3] - 2022-09-22
### Fixed

- README adjustments
- CODEOWNERS adjustments

## [0.1.2] - 2022-06-21
### Removed

- Undone the service timeout change from `10` to `10000`

## [0.1.1] - 2022-06-20

## [0.1.0] - 2022-06-20

### Added

- Change the service timeout from `10 ms` to `10000 ms` to prevent timeout exceptions

### Added

- Change timeout from `2000 ms` to `5000 ms` to prevent timeout exceptions 
